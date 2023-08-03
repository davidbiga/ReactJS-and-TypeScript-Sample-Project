/* eslint-disable */
import React, { useEffect, useMemo } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

/**
 * TODO
 */
export function OverviewModal({ show, onHide, title }) {
  // const dispatch = useDispatch();
  // const { actionsLoading, taskForEdit } = useSelector(
  //   (state) => ({
  //     actionsLoading: state.tasks.actionsLoading,
  //     taskForEdit: state.tasks.taskForEdit ? state.tasks.taskForEdit : tasksUIProps.initTask,
  //   }),
  //   shallowEqual
  // );

  // useEffect(() => {
  //   dispatch(actions.fetchTask(id));
  // }, [id, dispatch]);

  // const updateTask = (updatedTask) => {
  //   if (id) {
  //     dispatch(actions.updateTaskTitle(updatedTask)).then(() => {
  //       dispatch(actions.fetchTasks(tasksUIProps.queryParams)).then(() => onHide());
  //     });
  //   }
  // };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          APOD Overview: {title}
          </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button
              onClick={onHide}
              variant="light-success"
              className="float-left"
          >
              Cancel
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
