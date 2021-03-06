import React,{Component} from 'react';
// import jQuery from 'jquery';
// // import 'ztree'
// import ReactZtree from 'ztree-for-react';
import ZtreeReact from "./Ztree-react";
import 'ztree/css/zTreeStyle/zTreeStyle.css'
// import 'ztree/css/awesomeStyle/awesome.css'
import 'ztree/css/demo.css'
// import 'ztree/css/awesomeStyle/awesome.les'
const nodes= [
    {
        name: "父节点1",
        id:100,
        children: [
            {name: "子节点1",id:10},
            {name: "子节点2",id:2828,
                children:[
                {name:"子节点3",id:299}
                ]}
        ]
    }
]
// const nodes= [
//   {id:1, pId:0, name:"[core] 基本功能 演示", open:true}, 
//   {id:101, pId:1, name:"最简单的树 --  标准 JSON 数据"}, 
//   {id:102, pId:1, name:"最简单的树 --  简单 JSON 数据"}, 
//   {id:103, pId:1, name:"不显示 连接线"}, 
//   {id:104, pId:1, name:"不显示 节点 图标"}, 
//   {id:108, pId:1, name:"异步加载 节点数据"}, 
//   {id:109, pId:1, name:"用 zTree 方法 异步加载 节点数据"}, 
//   {id:110, pId:1, name:"用 zTree 方法 更新 节点数据"}, 
//   {id:111, pId:1, name:"单击 节点 控制"}, 
//   {id:112, pId:1, name:"展开 / 折叠 父节点 控制"}, 
//   {id:113, pId:1, name:"根据 参数 查找 节点"}, 
//   {id:114, pId:1, name:"其他 鼠标 事件监听"}, 

//   {id:2, pId:0, name:"[excheck] 复/单选框功能 演示", open:false}, 
//   {id:201, pId:2, name:"Checkbox 勾选操作"}, 
//   {id:206, pId:2, name:"Checkbox nocheck 演示"}, 
//   {id:207, pId:2, name:"Checkbox chkDisabled 演示"}, 
//   {id:208, pId:2, name:"Checkbox halfCheck 演示"}, 
//   {id:202, pId:2, name:"Checkbox 勾选统计"}, 
//   {id:203, pId:2, name:"用 zTree 方法 勾选 Checkbox"}, 
//   {id:204, pId:2, name:"Radio 勾选操作"}, 
//   {id:209, pId:2, name:"Radio nocheck 演示"}, 
//   {id:210, pId:2, name:"Radio chkDisabled 演示"}, 
//   {id:211, pId:2, name:"Radio halfCheck 演示"}, 
//   {id:205, pId:2, name:"用 zTree 方法 勾选 Radio"}, 

//   {id:3, pId:0, name:"[exedit] 编辑功能 演示", open:false}, 
//   {id:301, pId:3, name:"拖拽 节点 基本控制"}, 
//   {id:302, pId:3, name:"拖拽 节点 高级控制"}, 
//   {id:303, pId:3, name:"用 zTree 方法 移动 / 复制 节点"}, 
//   {id:304, pId:3, name:"基本 增 / 删 / 改 节点"}, 
//   {id:305, pId:3, name:"高级 增 / 删 / 改 节点"}, 
//   {id:306, pId:3, name:"用 zTree 方法 增 / 删 / 改 节点"}, 
//   {id:307, pId:3, name:"异步加载 & 编辑功能 共存"}, 
//   {id:308, pId:3, name:"多棵树之间 的 数据交互"}, 

//   {id:4, pId:0, name:"大数据量 演示", open:false}, 
//   {id:401, pId:4, name:"一次性加载大数据量"}, 
//   {id:402, pId:4, name:"分批异步加载大数据量"}, 
//   {id:403, pId:4, name:"分批异步加载大数据量"}, 

//   {id:5, pId:0, name:"组合功能 演示", open:false}, 
//   {id:501, pId:5, name:"冻结根节点"}, 
//   {id:502, pId:5, name:"单击展开/折叠节点"}, 
//   {id:503, pId:5, name:"保持展开单一路径"}, 
//   {id:504, pId:5, name:"添加 自定义控件"}, 
//   {id:505, pId:5, name:"checkbox / radio 共存"}, 
//   {id:506, pId:5, name:"左侧菜单"}, 
//   {id:507, pId:5, name:"下拉菜单"}, 
//   {id:509, pId:5, name:"带 checkbox 的多选下拉菜单"}, 
//   {id:510, pId:5, name:"带 radio 的单选下拉菜单"}, 
//   {id:508, pId:5, name:"右键菜单 的 实现"}, 
//   {id:511, pId:5, name:"与其他 DOM 拖拽互动"}, 
//   {id:512, pId:5, name:"异步加载模式下全部展开"}, 

//   {id:6, pId:0, name:"其他扩展功能 演示", open:false}, 
//   {id:601, pId:6, name:"隐藏普通节点"}, 
//   {id:602, pId:6, name:"配合 checkbox 的隐藏"}, 
//   {id:603, pId:6, name:"配合 radio 的隐藏"} 
// ]

const check ={
    enable: true,
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
      'onCheck':(event,treeId,treeNode)=>{this.handleCheck(event,treeId,treeNode)}
    }
  }
  handleClick(event,treeId,treeNode){//点击树的时候更新数据
    console.log(treeNode);
    // console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  handleCheck(event,treeId,treeNode){//选中复选框的时候
    console.log(treeNode);
  }
  componentDidMount(){
    //you can add treeName prop to set this treeObj to the window 
    console.log(window.ztree);
  }
}

export default ZtreeTest;