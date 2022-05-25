type Subscriber<T> = (value: T) => void;
type Unsubscriber = () => void;

interface ObservableInterface<T> {
  subscribe(fn: Subscriber<T>): Unsubscriber;
  set(value: T): void;
  yield(value: T): void;
  next(): void;
  peak(): T | undefined;
  previous(): T;
  value(): T;
}

export class Observable<T> implements ObservableInterface<T> {
  private _value: T;
  private _track: T[] = [];
  private _tasks: Subscriber<T>[] = [];

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  set = (value: T) => {
    this._value = value;
    this._track = [];
    this._tasks.forEach((task) => task(value));
  };

  yield = (value: T) => {
    this._track.push(value);
  };

  next = () => {
    if (this._track.length === 0) return;

    const value = this._track[0];
    this._value = value;
    this._tasks.forEach((task) => task(value));
    this._track.splice(0, 1);

    return this;
  };

  value = () => this._value;

  peak = () => this._track[0];

  previous = () => {
    return this._track.length > 0
      ? this._track[this._track.length - 1] || this._value
      : this._value;
  };

  subscribe = (fn: Subscriber<T>): Unsubscriber => {
    this._tasks.push(fn);

    return () => {
      this._tasks = this._tasks.filter((task) => task !== fn);
    };
  };
}
