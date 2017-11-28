import chalk from 'chalk'

function getStatusCodeStyle (status) {
  if (status === 400) {
    return { code: chalk.red(status), level: 'error', message: '--- Not Found' }
  } else if (status === 304) {
    return { code: chalk.cyan(status), level: 'info', message: '' }
  } else {
    return { code: chalk.green(status), level: 'info', message: '' }
  }
}

export {
  getStatusCodeStyle
}
