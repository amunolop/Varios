.grid{
  width:100%;
  border-collapse:separate;
  border-spacing:2px;
  table-layout:fixed;
}
.grid th, .grid td{
  border:1px solid #fff;
  padding:10px 12px;
  font-size:15px;
  vertical-align:middle;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.grid th{ background:#dfe3e7; text-align:left; font-weight:700; }
.grid td{ background:#e9ecef; }
.grid tr:nth-child(even) td{ background:#f3f5f7; }

.w1{ width:16%; }
.w2{ width:16%; }
.w3{ width:16%; }
.w4{ width:13%; }
.w5{ width:19%; }
.w6{ width:20%; }
.clickable span{ color:#b00000; text-decoration:underline; font-weight:700; }

.managed{
  display:flex;
  align-items:center;
  gap:10px;
}
.managed select{
  width:140px;
  height:28px;
  border:1px solid #000;
  background:#b9c0c7;
  font-size:14px;
}

.saveIcon{
  width:24px;
  height:24px;
  border:2px solid #e30000;
  border-radius:3px;
  background:#fff;
  position:relative;
}
.saveIcon:before{
  content:"";
  position:absolute;
  left:5px; top:5px;
  width:12px; height:8px;
  border:2px solid #e30000;
  background:#fff;
}
.saveIcon:after{
  content:"";
  position:absolute;
  left:8px; bottom:5px;
  width:8px; height:6px;
  background:#e30000;
}

.empty{
  text-align:center;
  font-weight:700;
  color:#333;
  white-space:normal;
}