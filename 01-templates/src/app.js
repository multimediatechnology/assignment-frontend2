import router from 'page'

import drivers from './drivers/index';
import driver from './drivers/detail';
//import notFound from './errors/notFound';

router('/drivers/:driver', driver);
router('/drivers', drivers);
//router('*', notFound);

router();
