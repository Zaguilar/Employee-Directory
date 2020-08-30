import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="row">
          <div className="col-4 col-md-2">
            <div className="img-container">
              <img alt={`${props.firstName} ${props.lastName}`} src={props.image} />
            </div>
          </div>
          <div className="col-8 col-md-10">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3">
                <strong className='text-primary'>Name:</strong> {props.firstName} {props.lastName}
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className=""><strong className='text-primary'>Location:</strong> {props.location}</div>
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <strong className='text-primary'>Role:</strong> {props.role}
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <strong className='text-primary'>Department:</strong> {props.department}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;