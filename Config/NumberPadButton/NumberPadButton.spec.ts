import { NumberPadButtonId, NUMBER_PAD_BUTTONS } from ".";

describe("NumberPadButton process", () => {
  describe("Reset Button", () => {
    it("return 0", () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Reset].process("0")).toEqual(
        "0"
      );
      expect(
        NUMBER_PAD_BUTTONS[NumberPadButtonId.Reset].process("100")
      ).toEqual("0");
    });
  });
  describe("Delete Button", () => {
    /**
     *
     * 1. previous value = "0"
     * -> "0"
     *
     * 2. previous value != "0" etc. "22."
     * -> "22"
     */
    it('process return "0" if previous value = "7"', () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Delete].process("7")).toEqual(
        "0"
      );
    });
    it('process return "0" if previous value = "0"', () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Delete].process("0")).toEqual(
        "0"
      );
    });
    it('process return "22" if previous value = "22."', () => {
      expect(
        NUMBER_PAD_BUTTONS[NumberPadButtonId.Delete].process("22.")
      ).toEqual("22");
    });
  });
  describe("Number Button: 7,8,9,...0", () => {
    /**
     * A. 7,8,9...0 etc.7
     *
     * 1. previous value = "0"
     * -> "7"
     *
     * 2. previous value != "0" etc. "22."
     * -> "22.7"
     */
    it("process return '0' if previous value = '0'", () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Zero].process("0")).toEqual(
        "0"
      );
    });
    it("process return '7' if previous value = '0'", () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Seven].process("0")).toEqual(
        "7"
      );
    });
    it("process return '22.' if previous value = '22.'", () => {
      expect(
        NUMBER_PAD_BUTTONS[NumberPadButtonId.Point].process("22.")
      ).toEqual("22.");
    });
  });
  describe("Point Button", () => {
    /**
     * B. point
     *
     * 1. previous value = "0"
     * -> "0."
     *
     * 2. previous value != "0" and with . at last etc. "22."
     * -> "22."
     *
     */
    it('process return "0." if previous value = "0"', () => {
      expect(NUMBER_PAD_BUTTONS[NumberPadButtonId.Point].process("0")).toEqual(
        "0."
      );
    });
    it('process return "22." if previous value = "22."', () => {
      expect(
        NUMBER_PAD_BUTTONS[NumberPadButtonId.Point].process("22.")
      ).toEqual("22.");
    });
    it('process return "22.123" if previous value = "22.123"', () => {
      expect(
        NUMBER_PAD_BUTTONS[NumberPadButtonId.Point].process("22.123")
      ).toEqual("22.123");
    });
  });
});
