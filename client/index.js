// import React from "react";
// import GroceryItem from "./GroceryItem";
// import axios from "axios";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gList: [],
//       listItem: "",
//     };
//     this.addItem = this.addItem.bind(this);
//     this.updateItem = this.updateItem.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get("/get")
//       .then((res) => {
//         let array = [];
//         console.log(res.data);
//         for (let i = 0; i < res.data.length; i++) {
//           array.push(res.data[i].itemName);
//         }
//         console.log(array);
//         this.setState({
//           gList: [...this.state.gList, ...array],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   addItem() {
//     let obj = this.state.listItem;
//     axios.post("/post", { obj }).then((res) => {
//       this.setState({
//         gList: [...this.state.gList, this.state.listItem],
//         listItem: "",
//       });
//     });
//   }

//   updateItem(event) {console.log(event.target.value);
//     event.preventDefault();
//     this.setState({
//       listItem: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input onChange={this.updateItem} placeholder="Add Item" />
//         <button onClick={this.addItem}>Submit</button>
//         <ul>
//           <GroceryItem stuff={this.state.gList} />
//         </ul>
//       </div>
//     );
//   }
// }  