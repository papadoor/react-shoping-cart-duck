import React from 'react';
import Banner from './banner/BannerPage';
import Card from './card/CardPage';
import Duck from './DuckApp';
import { PageHeader, Grid} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './card/CardPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class GettingStart extends React.Component {
    render() {
        return (
            <div>
              <Banner />
              <Grid>
                <PageHeader>Product</PageHeader>
                <MuiThemeProvider>
                  <MyAwesomeReactComponent />
                </MuiThemeProvider>
              </Grid>
              <Duck />
            </div>
        );
    }
}
