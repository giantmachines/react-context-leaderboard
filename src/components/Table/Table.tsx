import { TableViewRoot } from "./Table.styles";
import { convertTime } from "../../utils";
import { UserInfo } from "../../types";


const Table = (props : {userData:UserInfo[]}) => {

  const {userData} = props;

  return (
    <TableViewRoot>
      <div className="table">
        <div className="row">
          <div className="headerCell">Rank</div>
          <div className="headerCell">Name</div>
          <div className="headerCell">Time</div>
        </div>
        {userData.map((user, idx) => {
          return(
            <div key={user.id} className="row">
              <div style={{textAlign:'right'}} className="cell">#{idx+1}</div>
              <div className="cell">{user.name}</div>
              <div style={{textAlign:'center'}} className="cell">{convertTime(user.msTime)}</div>
            </div>
          )
        })}
      </div>
    </TableViewRoot>
  );
};

export default Table;
