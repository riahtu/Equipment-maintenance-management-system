import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";

const RepairRecord = props => {
  const {
    company,
    contact,
    handleChange,
    handleSubmit,
    pro_type,
    mach_type,
    sysId,
    brand,
    dev_error,
    isprint
  } = props;
  //console.log(props);
  return (
    <>
      {isprint && <Redirect to="/admin/print" />}
      <div className="mask" />
      <div className="record-wrap">
        <header className="record-title">报修登记</header>
        <div className="regist-info">
          <div className="regist-left">
            <div className="accept-time">
              <label>接修日期</label>
              <input
                type="text"
                name="repair_date"
                value={new Date().toLocaleDateString()}
                readOnly
              />
            </div>
            <div className="pro-type">
              <label>产品类型</label>
              <input
                type="text"
                name="pro_type"
                value={pro_type}
                onChange={handleChange}
              />
            </div>
            <div className="machine-model">
              <label>机器型号</label>
              <input
                type="text"
                name="mach_type"
                value={mach_type}
                onChange={handleChange}
              />
            </div>
            <div className="company">
              <label>单位名称</label>
              <input type="text" name="company" value={company} readOnly />
            </div>
          </div>
          <div className="regist-right">
            {/* <div className="repair-id">
              <label>维修编号</label>
              <input type="text" name="repairId" value={repairId} readOnly />
            </div> */}
            <div className="machine-brand">
              <label>机器品牌</label>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={handleChange}
              />
            </div>
            <div className="machine-sysId">
              <label>系列号&#12288;</label>
              <input
                type="text"
                name="sysId"
                value={sysId}
                onChange={handleChange}
              />
            </div>
            <div className="contact">
              <label>联系人&#12288;</label>
              <input type="text" name="contact" value={contact} readOnly />
            </div>
          </div>
        </div>
        <div className="machine-err">
          <label>机器故障现象</label>
          <input
            type="text"
            name="dev_error"
            value={dev_error}
            onChange={handleChange}
          />
        </div>
        <div className="regist-btn" onClick={handleSubmit}>
          <label>报修</label>
        </div>
      </div>
    </>
  );
};

export default RepairRecord;
