import React from 'react';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lifecycle',
    };
    console.log('CONSTRUCTOR');
  }

  static getDerivedStaticFromProps(props, state) {
    console.group('get deried static from props');
    console.log('props', props);
    console.log('state', state);
    console.groupEnd();
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group('SHOULD UPDATE');
    console.log(nextState, 'nextState');
    console.log(nextProps, 'nextProps');
    console.log('this props', this.props);
    console.log('this state', this.state);
    console.groupEnd();
    return null;
  }
  render() {
    console.log('RENDER');
    return (
      <div>
        <h1>
          {this.state.title} {this.props.name} : {this.props.count}
        </h1>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.group('get snapshot before update');
    console.log('prevState:', prevState);
    console.log('prevProps:', prevProps);
    console.log('this props:', this.props);
    console.log('this state:', this.state);
    console.groupEnd();
    return null;
  }

  componentDidMount() {
    console.log('DID MOUNT');
  }

  componentDidUpdate() {
    console.log('DID UPDATE');
  }
  componentWillUnmount() {
    console.log('UNMOUNTED');
  }
}
