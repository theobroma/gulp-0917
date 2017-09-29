import { task, series } from 'gulp';
import dev from './gulp/tasks/dev';

// Main tasks
task('dev', dev);

// Default task
task('default', series('dev'));
