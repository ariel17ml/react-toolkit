import React, { Component } from "react";

class AuthCallback extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    const auth = this.props.auth;
    auth.handleAuthentication().then(() => {
        this.setState({
          loading: false
        });
    }).catch((err) => {
        console.error("Error handling authentication: ", err);
        this.logout();
    });
  }

  render() {
    // Inherance must overload this method
    //
    // EXAMPLE:
    // if (this.state.loading) {
    //     return (
    //       <div>
    //         <Header {...this.props} />
    //         <Grid fluid={true}>
    //           <Loading />
    //         </Grid>
    //       </div>
    //     );
    // }
    // return <Redirect to="/profile" />;
  }
}

export default AuthCallback;