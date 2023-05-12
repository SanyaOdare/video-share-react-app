// class Rating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: 0
//     };
//     this.handleRatingClick = this.handleRatingClick.bind(this);
//   }

//   handleRatingClick(index) {
//     this.setState({
//       rating: index
//     });
//   }

//   render() {
//     const { rating } = this.state;
//     const stars = ['*', '*', '*', '*', '*'];
//     const renderedStars = stars.map((star, index) => {
//       const starClass = index <= rating ? 'active' : '';
//       return (
//         <span key={index} className={starClass} onClick={() => this.handleRatingClick(index)}>
//           {star}
//         </span>
//       );
//     });
//     return (
//       <div id="rating">
//         {renderedStars}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Rating />, document.getElementById('root'));