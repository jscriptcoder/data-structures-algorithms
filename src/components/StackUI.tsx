import * as React from 'react';
import Stack from '../data-structures/stack';

export default class StackUI extends React.Component<any, any> {

  private stack: Stack<string>;

  public create(capacity: number): void {
    this.stack = new Stack<string>(capacity);
  }

  public push(value: string): void {
    this.stack.push(value);
  }

  public pop(): void {
    this.stack.pop();
  }

  public peek(): void {
    this.stack.peek();
  }

  public render(): JSX.Element {
    return (
      <div className="stack-ui">
        <fieldset className="stack-api">
          <legend>Stack Interface</legend>
          <table>
            <tr>
              <td><button>Create Stack</button></td>
              <td><input type="text" placeholder="Capacity..." /></td>
            </tr>
            <tr>
              <td><button>Push value</button></td>
              <td><input type="text" /></td>
              <td>Returned value: </td>
            </tr>
            <tr>
              <td><button>Pop value</button></td>
              <td><input type="text" /></td>
              <td>Returned value: </td>
            </tr>
          </table>
        </fieldset>
        <div className="stack-view">
          
        </div>
      </div>
    );
  }

}