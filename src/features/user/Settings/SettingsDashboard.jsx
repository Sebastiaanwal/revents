import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Switch, Route, Redirect} from 'react-router-dom'
import SettingsNav from './SettingsNav';
import BasicsPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './Photospage';
import AccountPage from './AccountPage';

function SettingsDashboard() {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic'/>
          <Route path='/settings/basics' component={BasicsPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/photos' component={PhotosPage} />
          <Route path='/settings/account' component={AccountPage} />

        </Switch>
      </Grid.Column>
      <Grid.Column with={4}>
        <SettingsNav/>
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard