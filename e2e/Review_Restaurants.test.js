/* eslint-disable no-undef */
Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario("adding custom review", async ({ I }) => {
  const name = 'Erwin Erikson';
  const detail = 'Test Review Restaurants (E2E)';

  I.seeElement('.card-item-bottom a');
  I.click(locate('.card-item-bottom a').first());
  I.seeElement('#comment-form');
  I.seeElement('#send-button');
  I.seeElement('.card-review');
  const firstVisibleReviewRestaurants = await I.grabNumberOfVisibleElements('.card-review');
  I.fillField('nama', name);
  I.fillField('body', detail);
  I.click('#send-button');

  I.refreshPage();
  const visibleReviewRestaurants = await I.grabNumberOfVisibleElements('.card-review');
  assert.strictEqual(firstVisibleReviewRestaurants + 1, visibleReviewRestaurants);
});