import run from './app/app';
import AlertService from './app/alert.service';
import ComponentService from './app/component.service';

run(new AlertService(), new ComponentService());
