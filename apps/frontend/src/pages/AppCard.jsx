/* eslint-disable */
import { NASATable } from './list/NASATable';
import { OverviewModal } from './overview/OverviewModal';
import { Route, useHistory } from "react-router-dom";
export function AppCard() {
  const history = useHistory();
  const openOverview = (title) => {
    history.push(`/apod/overview/${title}`);
  }
  // add a provider to store the UIEvents passed to the table that handle the route changes
  // and adjusting a store
  return (
    <>
    {/* // TODO
      <Route path="/apod/overview/:title">
      {({ history, match }) => (
          <OverviewModal
            show={match != null}
            title={match && match.params.title}
            onHide={() => {
              history.push("/");
            }}
          />
      )}
      </Route> */}
      <NASATable openOverview={openOverview} />
    </>
  );
}