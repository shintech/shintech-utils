import chalk from 'chalk'

function getStatusCodeStyle (status, method) {
  var message = {}

  if (method === 'GET') {
    message['method'] = chalk.yellow(method)
  } else if (method === 'POST') {
    message['method'] = chalk.magenta(method)
  } else if (method === 'PUT') {
    message['method'] = chalk.blue(method)
  } else if (method === 'DELETE') {
    message['method'] = chalk.red(method)
  }

  if (status === 400) {
    message['code'] = chalk.red(status)
    message['level'] = 'error'
    message['message'] = '--- Not Found'
  } else if (status === 304) {
    message['code'] = chalk.cyan(status)
    message['level'] = 'info'
    message['message'] = ''
  } else {
    message['code'] = chalk.green(status)
    message['level'] = 'info'
    message['message'] = ''
  }

  return message
}

export {
  getStatusCodeStyle
}
