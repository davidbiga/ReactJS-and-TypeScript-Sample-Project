import React, { useEffect, useMemo, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios';
import { ImageColumnFormatter } from "./partials/ImageColumnFormatter";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
    useSelector, shallowEqual, connect, useDispatch,
  } from 'react-redux';
import * as nasa from "../../_redux/nasaRedux";

export function NASATable({openOverview, setDummy}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [apod, setSelectedApod] = useState(false);
  useEffect(() => {
    dispatch(nasa.actions.getApod());
  }, [])

  const entities = useSelector((state) => state.nasa.apod, shallowEqual);
  const columns = [
    {
      dataField: "url",
      text: "Image",
      sort: false,
      formatter: ImageColumnFormatter,
    },
    {
      dataField: "media_type",
      text: "Media Type",
      sort: true,
    },
    {
      dataField: "title",
      text: "Name",
      sort: true,
    },
    {
      dataField: "explanation",
      text: "Description",
      sort: true,
    },
    {
      dataField: "service_version",
      text: "Version",
      sort: true,
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
    },
  ];

  function getSelectRow(e, row, rowIndex) {
    setSelectedApod(row);
    setShow(true);
  }

  return (
    <div className="row">
        <div className="col-lg-12">
          <Modal
            size="lg"
            show={show}
            onHide={() => {setShow(!show); setSelectedApod(false); }}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                APOD Overview: {apod.title}
                </Modal.Title>
            </Modal.Header>
                <Modal.Body style={{textAlign: 'center'}}>
                    <Row>
                        <Col>
                            <img src={apod.url} width={100} height={100} />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            {apod.explanation}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            {apod.date}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            {apod.media_type}
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            {apod.service_version}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                <Button
                    onClick={() => {setShow(!show); setSelectedApod(false); }}
                    variant="light-success"
                    className="float-left"
                >
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
            <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center"
                bootstrap4
                bordered={false}
                remote
                keyField="url"
                data={entities === null ? [] : entities}
                columns={columns}
                rowEvents={{ onClick: getSelectRow}}
            />
        </div>
    </div>
  );
}
