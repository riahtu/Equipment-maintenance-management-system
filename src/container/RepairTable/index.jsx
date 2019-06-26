import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import RepairList from "../../components/repairlist";
import { getRepairList } from "../../api/index";

class RepairTable extends Component {
  state = {
    page: 1,
    repairList: [],
    pageCount: 0
  };

  componentDidMount() {
    getRepairList()
      .then(data => {
        this.setState({
          repairList: data.repairList,
          pageCount: Math.ceil(data.repairList.length / 10)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changePage = e => {
    if (e.target.className === "prev" && this.state.page !== 1) {
      this.setState(state => ({
        page: state.page - 1
      }));
    } else if (
      e.target.className === "next" &&
      this.state.page !== this.state.pageCount
    ) {
      this.setState(state => ({
        page: state.page + 1
      }));
    }
  };

  render() {
    const { pageCount, page } = this.state;
    const repairList = this.state.repairList.slice((page - 1) * 10, page * 10);
    return (
      <div className="work-list">
        <div className="list-title">
          <label>报修单列表</label>
        </div>
        <div className="th">
          <div className="th-td" key={"th-td-repairId"}>
            <label>报修单编号</label>
          </div>
          <div className="th-td" key={"th-td-time"}>
            <label>报修时间</label>
          </div>
          <div className="th-td" key={"th-td-status"}>
            <label>报修状态</label>
          </div>
          <div className="th-td" key={"th-td-constact"}>
            <label>联系人</label>
          </div>
          <div className="th-td" key={"th-td-settle"}>
            <label>结算</label>
          </div>
        </div>
        <RepairList repairList={repairList} />
        <div className="index-wrap">
          <label className="prev" onClick={this.changePage}>
            上一页
          </label>

          <div>
            <label className="index-label">
              第<span>{page}</span>页
            </label>
            <label className="page-count">
              共<span>{pageCount}</span>页
            </label>
          </div>
          <label className="next" onClick={this.changePage}>
            下一页
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(RepairTable);
