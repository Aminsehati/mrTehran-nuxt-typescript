import consola from 'consola'

export default abstract class Logger {
  private static get _isDev (): boolean {
    return (process.env.NODE_ENV !== 'production')
  }

  public static log (title:string, ...arg:any[]) {
    if (this._isDev) {
      consola.log(title, ...arg)
    }
  }

  public static warn (title:string, ...arg:any[]) {
    if (this._isDev) {
      consola.warn(title, ...arg)
    }
  }

  public static info (title:string, ...arg:any[]) {
    if (this._isDev) {
      consola.info(title, ...arg)
    }
  }

  public static success (title:string, ...arg:any[]) {
    if (this._isDev) {
      consola.success(title, ...arg)
    }
  }

  public static error (title:string, ...arg:any[]) {
    if (this._isDev) {
      consola.error(title, ...arg)
    }
  }
}