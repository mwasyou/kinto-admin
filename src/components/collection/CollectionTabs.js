import React, { Component } from "react";
import { Link } from "react-router";


export default class CollectionTabs extends Component {
  render() {
    const {bid, cid, selected, capabilities, children} = this.props;

    return (
      <div className="tabs-container">
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className={selected === "records" ? "active" : ""}>
            <Link to={`/buckets/${bid}/collections/${cid}/records`}>
              <i className="glyphicon glyphicon-align-justify" />
              Records
            </Link>
          </li>
          <li role="presentation" className={selected === "attributes" ? "active" : ""}>
            <Link to={`/buckets/${bid}/collections/${cid}/attributes`}>
              <i className="glyphicon glyphicon-cog" />
              Attributes
            </Link>
          </li>
          <li role="presentation" className={selected === "permissions" ? "active" : ""}>
            <Link to={`/buckets/${bid}/collections/${cid}/permissions`}>
              <i className="glyphicon glyphicon-lock" />
              Permissions
            </Link>
          </li>
          {"history" in capabilities ?
            <li role="presentation" className={selected === "history" ? "active" : ""}>
              <Link to={`/buckets/${bid}/collections/${cid}/history`}>
                <i className="glyphicon glyphicon-time" />
                History
              </Link>
            </li> : null}
        </ul>
        <div className="panel panel-default">
          <div className="panel-body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}