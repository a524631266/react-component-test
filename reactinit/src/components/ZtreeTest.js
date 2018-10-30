import React,{Component} from 'react';
// import jQuery from 'jquery';
// // import 'ztree'
// import ReactZtree from 'ztree-for-react';
import ZtreeReact from "./Ztree-react";
import 'ztree/css/zTreeStyle/zTreeStyle.css'
// import 'ztree/css/awesomeStyle/awesomeStyle.less'
const nodes= [
    {
        name: "父节点1",
        id:0,
        children: [
            {name: "子节点1",id:1},
            {name: "子节点2",id:2,
                children:[
                {name:"子节点3",id:3}
                ]}
        ]
    }
]


const check ={
    enable: false,
    nocheckInherit: false
}
class ZtreeTest extends Component {
  render() {
    return (
      <div >
          {/* <ReactZtree nodes={nodes} events={this.getEvents()} check={check} ref="ztree" treeName={'tree1'}/> */}
          <ZtreeReact nodes={nodes} events={this.getEvents()} ref="ztree" check={check}/>
      </div>
    );
  }
  getEvents(){
    return {
      'onClick':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)},
      'onCheck':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)}
    }
  }
  handleClick(event,treeId,treeNode){
    console.log(treeNode);
    console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  handleCheck(event,treeId,treeNode){
    console.log(treeNode);
  }
  componentDidMount(){
    //you can add treeName prop to set this treeObj to the window 
    console.log(window.ztree);
  }
}

export default ZtreeTest;