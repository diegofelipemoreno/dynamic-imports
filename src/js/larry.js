/**
 * The Larry component.
 */
export class Larry {
  /**
   * Creates a Component component.
   */
  constructor() {
  }

  /**
   * Says hello.
   */
  sayHello() {
    console.log('Hello I am a component named Larry');
  }

  /**
   * Initializes the component.
   * @override
   */
  initialize() {
    console.log('Component Larry initialized');
  }
}