/*global riot, describe, it, beforeEach, expect*/
describe('Starwars apiが使えてるかどうか', function () {
  beforeEach(function () {
    // create mounting points
    var html = document.createElement("app-name");
    document.body.appendChild(html);
  });

  it('should mount the tag', function () {
    riot.mount("app-name")
    expect(document.querySelector("app-name").textContent).toBe("ハローワールド")
  });
});
