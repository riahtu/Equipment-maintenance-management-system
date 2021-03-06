import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const MaintenanceList = props => {
  const { maintenancesList, handleClick, identify } = props;

  return (
    <div className="tr">
      {maintenancesList.map((tds, index) => {
        let status;
        switch (tds.maintain_status) {
          case "1":
            status = "等待分配";
            break;
          case "2":
            status = "维修进行中";
            break;
          case "3":
            status = "结束";
            break;
          case "4":
            status = "结束";
            break;
        }
        return (
          <div className="tr-tds" key={"tr-tds" + index}>
            <div className="tr-td id" key="tr-td-id">
              <label>{tds.order_num}</label>
            </div>
            <div className="tr-td time" key="tr-td-time">
              <label>{new Date(tds.assign_date).toLocaleDateString()}</label>
            </div>
            <div className="tr-td status" key="tr-td-status">
              <label>{status}</label>
            </div>
            <div className="tr-td contact" key="tr-td-contact">
              <label>{tds.contact}</label>
            </div>
            <div className="tr-td change">
              {identify !== "4" &&
                (tds.maintain_status === "2" ? (
                  <i
                    className="assign"
                    id={tds.order_num}
                    onClick={handleClick}
                  >
                    &#xe61f;
                  </i>
                ) : (
                  <></>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MaintenanceList;
