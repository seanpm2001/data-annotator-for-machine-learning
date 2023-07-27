/*
Copyright 2019-2023 VMware, Inc.
SPDX-License-Identifier: Apache-2.0
*/
import { browser, $, $$ } from "protractor";
import { FunctionUtil } from "../utils/function-util";

describe("Spec - make sure faq page can normally display ", () => {
  let since = require("jasmine2-custom-message");
  const FAQ_TAB = $('.bottomHelpLink a[href="/loop/faq"]');
  const PANEL = $$("clr-accordion-panel");

  it("Should faq page display successfully.", async (done) => {
    await FunctionUtil.click(FAQ_TAB);
    await browser.waitForAngular();
    since("the panel there should be 5")
      .expect(FunctionUtil.getElementsNum(PANEL))
      .toBe(5);
    done();
  });
});