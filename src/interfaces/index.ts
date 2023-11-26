export interface IMessage {
  id: string,
  from: IFrom,
  type: string,
  time: string
  text?: string,
}

export interface IProps {
  from: IFrom,
  message: IMessage
}

interface IFrom {
  name: string
}