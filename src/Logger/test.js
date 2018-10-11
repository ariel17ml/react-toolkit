import Logger from './';

describe('Logger', () => {
  it('is truthy', () => {
    expect(Logger).toBeTruthy()
  })

  describe('logs in levels', () => {
    const logger = new Logger(true);

    it('info', () => {
      expect(() => {
        logger.info("this is info", {field: "value"});
      }).not.toThrow();
    });

    it('error', () => {
      expect(() => {
        logger.error("this is error", {field: "value"});
      }).not.toThrow();
    });

    it('trace', () => {
      expect(() => {
        logger.trace("this is trace", {field: "value"});
      }).not.toThrow();
    });

    it('table', () => {
      expect(() => {
        logger.table({field1: "value1", field2: "value2"});
      }).not.toThrow();
    });
  });
})
