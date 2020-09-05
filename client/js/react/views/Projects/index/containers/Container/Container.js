import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { TitlePage, Loading } from '~/globalComponents';
import Projects from '../Projects';
import Form from '../../../form';

function Container() {
  const { path } = useRouteMatch();
  const { isLoading, isError } = useSelector(state => state);

  return (
    <div className="projects d-contents">
      <TitlePage title="Проекты" titleButton="Создать проект" link="/projects/new" />
      {isLoading && <Loading />}
      {!isLoading && !isError && <Projects />}
      <Switch>
        <Route exact path={path.includes('new') ? `${path}` : `${path}/new`}>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
