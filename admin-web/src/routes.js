import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));
const Ecommerce = React.lazy(() => import('./Demo/Category/Ecommerce/Ecommerce'));

// const Age = React.lazy(() => import('./Demo/Category/Age/Age'));
// const CategoryDance = React.lazy(() => import('./Demo/Category/CategoryDance/CategoryDance'));
// const Dance = React.lazy(() => import('./Demo/Category/Dance/Dance'));
// const CompetitionClass = React.lazy(() => import('./Demo/Category/CompetitionClass/CompetitionClass'));
// const Fees = React.lazy(() => import('./Demo/Category/Fees/Fees'));
// const CategoryContent = React.lazy(() => import('./Demo/Category/CategoryContent/CategoryContent'));

// const TournamentsList = React.lazy(() => import('./Demo/Competition/TournamentsList/TournamentsList'));
// const CompetitionContent = React.lazy(() => import('./Demo/Competition/CompetitionContent/CompetitionContent'));

// const AthletesList = React.lazy(() => import('./Demo/Athletes/AthletesList/AthletesList'));

// const NewThemes = React.lazy(() => import('./Demo/News/NewsThemes/NewThemes'));
// const NewList = React.lazy(() => import('./Demo/News/NewsList/NewList'));

// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
// const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    { path: '/ecommerce', exact: true, name: 'Ecommerce', component: Ecommerce },
    // { path: '/category/age', exact: true, name: 'Age', component: Age },
    // { path: '/category/category-dance', exact: true, name: 'CategoryDance', component: CategoryDance },
    // { path: '/category/dance', exact: true, name: 'Dance', component: Dance },
    // { path: '/category/competition-class', exact: true, name: 'CompetitionClass', component: CompetitionClass },
    // { path: '/category/fees', exact: true, name: 'Fees', component: Fees },
    // { path: '/category/category-content', exact: true, name: 'CategoryContent', component: CategoryContent },
    
    // { path: '/competition/tournaments-list', exact: true, name: 'TournamentsList', component: TournamentsList },
    // { path: '/competition/competition-content', exact: true, name: 'CompetitionContent', component: CompetitionContent },

    // { path: '/athletes/athletes-list', exact: true, name: 'AthletesList', component: AthletesList },

    // { path: '/news/new-themes', exact: true, name: 'NewThemes', component: NewThemes },
    // { path: '/news/new-list', exact: true, name: 'NewList', component: NewList },

    // { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    // { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin1 }
];

export default routes;