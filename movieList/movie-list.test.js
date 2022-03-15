const {Builder, Capabilities} = require('selenium-webdriver')

const {checkMovie, checkNotify, deleteMovie} = require('./movie-list-functions')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('testing some functionality on the "Movie List" page', async () => {
    //Checked-off functionality
    await checkMovie(driver)
    await driver.sleep(2000)
    //Verify checked notification
    await checkNotify(driver)
    await driver.sleep(2000)
    //Verify the delete functionality
    await deleteMovie(driver)
    await driver.sleep(2000)

})