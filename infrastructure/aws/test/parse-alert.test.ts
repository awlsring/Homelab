import { TrueNASAlertMessage, parseAlertMessage } from "../src/lambdas/truenas-notifier-lambda"

describe("Parse alert message", () => {
  test("Parse test alert", () => {
    const message = "TrueNAS @ truenas<br><br>This is a test alert"

    const expected: TrueNASAlertMessage = {
      system: "TrueNAS",
      user: "truenas",
      newAlert: "This is a test alert",
    }

    const actual = parseAlertMessage(message)

    expect(actual).toEqual(expected)
  })

  test("Parse new alert and existing alerts", () => {
    const message = "TrueNAS @ truenas<br><br>New alerts:\n<ul><li>Scrub of pool 'WD-6D-8T' finished.</li>\n</ul>Current alerts:\n<ul><li>An update is available for \"jellyfin\" application.</li>\n<li>Scrub of pool 'WD-6D-8T' finished.</li>\n</ul>\n"

    const expected: TrueNASAlertMessage = {
      system: "TrueNAS",
      user: "truenas",
      newAlert: "Scrub of pool 'WD-6D-8T' finished.",
      currentAlerts: [
        "An update is available for \"jellyfin\" application.",
      ]
    }

    const actual = parseAlertMessage(message)

    expect(actual).toEqual(expected)
  })
})