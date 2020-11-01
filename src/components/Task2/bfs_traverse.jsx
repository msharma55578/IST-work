import React, { Component } from 'react'
import { Markup } from 'interweave';
export default class bfs_traverse extends Component {
    constructor(){
        super();
        this.state={
            queue:[],
            Res_queue:[],
        }
        this.logic();
    }
     obj = {
        a: ["b", "c"],
        c: ["d", "e"],
        d: ["f", "g"],
        e: ["h", "i"],
        f: ["j", "k"],
        g: ["l", "m"]
      };
        // str="Level 0: ";
        str=""
       items = Object.keys(this.obj);
      // console.log(items);
      isExist(ele) {
        return this.items.includes(ele);
      }
      
      push_child(ele) {
        this.items.map((key) => {
          if (key === ele) {
            let value = this.obj[key];
            this.state.queue.push(value[0]);
            // this.str+=value[0];
            this.state.queue.push(value[1]);
            // this.str+=value[1];
          }
        });
      }
      logic() {
        this.state.queue.push(this.items[0]);
        // this.str+=this.items[0];
        this.state.queue.push("\n");
        // this.str+="\nLevel 2 ";
        let l=2;
        while (this.state.queue.length !== 0) {
          let ele = this.state.queue.shift();
          this.state.Res_queue.push(ele);
          this.str+=ele;
          if (ele === "\n") {
            console.log("\n");
            if (this.state.queue.length !== 1){
                this.state.queue.push("\n");
                // this.str+="\nLevel ";
                // this.str+=(++l);
            } 
            continue;
          }
          console.log(ele);

          if (this.isExist(ele)) this.push_child(ele);
        }
        // this.str+="</h3>"
        console.log(this.state.Res_queue)
      }
    render() {
        return (
            <div>
                <h3>Level wise Traversal</h3>
                <Markup content={this.str} />
                {/* {this.state.Res_queue.map((i)=>
                    <h3>{i}</h3>
                )} */}
            </div>
        )
    }
}
