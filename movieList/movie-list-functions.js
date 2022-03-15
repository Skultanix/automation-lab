const { By } = require('selenium-webdriver')

module.exports = {
    checkMovie: async (driver) => {
        //add a movie to the list to be worked with
        await driver.findElement(By.xpath('//input')).sendKeys('Old Yeller')

        await driver.findElement(By.xpath('//button[text()="Add"]')).click()

       //checking off the movie on the list
       await driver.findElement(By.xpath('//span[text()="Old Yeller"]')).click()

       const checked = await driver.findElement(By.xpath('//span[@class="checked"]'))

       expect(checked.isDisplayed()).toBeTruthy()
    },

    checkNotify: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('The Man From Snowy River')
        await driver.findElement(By.xpath('//button[1]')).click()

        //looking for notification of movie being checked off
        await driver.findElement(By.xpath('//span[text()="The Man From Snowy River"]')).click()

        const checkedNotify = await driver.findElement(By.xpath('//aside[text()="The Man From Snowy River watched!"]'))

        expect(checkedNotify.isDisplayed()).toBeTruthy()
    }, 

    deleteMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Up')
        await driver.findElement(By.xpath('//button[1]')).click()

        await driver.findElement(By.xpath('//button[text()="x"]')).click()
        const deleted = await driver.findElement(By.xpath('//span[text()="Up"]'))
        expect(deleted.isDisplayed()).not.toBe()
    }
}