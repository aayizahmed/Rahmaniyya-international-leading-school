const { Jimp } = require('jimp');

async function makeTransparent() {
  try {
    const image = await Jimp.read('public/logo.png');
    console.log('Image loaded. Processing...');
    
    // Distance threshold for white color
    const tolerance = 240; 

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      // If the pixel is close to white, make it transparent
      if (red > tolerance && green > tolerance && blue > tolerance) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel
      }
    });

    await image.write('public/logo.png');
    console.log('Image processed and saved.');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

makeTransparent();
