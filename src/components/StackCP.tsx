import * as React from 'react';
import Stack from '../data-structures/stack';

export default class StackCP extends React.Component<any, any> {

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
      <div className="stack-cp">
        <fieldset className="stack-api">
          <legend>Stack Control Panel</legend>
          <table>
            <tr>
              <td><button>Create Stack</button></td>
              <td><input type="text" placeholder="Capacity..." /></td>
              <td>Size</td>
            </tr>

          </table>
        </fieldset>
        <br />
        <fieldset className="stack-view">
          <legend>Stack Visualization</legend>
        </fieldset>
      </div>
    );
  }

}