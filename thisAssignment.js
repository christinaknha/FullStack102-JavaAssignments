// Create object called photoSlideShow
let photoSlideShow = {
    // Creates array containing names of photos as strings
    photoList : ['photo1', 'photo2', 'photo3'],
    // creates a integer to represent photo index
    currentPhotoIndex : 0,
    // creates a function that goes to the next photo
    nextPhoto : function() {
        if (this.currentPhotoIndex >= 0 && this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex = this.currentPhotoIndex + 1;
            return (this.photoList[this.currentPhotoIndex]);
        } else if (this.currentPhotoIndex >= this.photoList.length - 1){
            return("End of slideshow")
        } else {
            return("Something went wrong. Please try again.")
        }
    },
    prevPhoto : function() {
        if (this.currentPhotoIndex < this.photoList.length && this.currentPhotoIndex >= 1) {
            this.currentPhotoIndex = this.currentPhotoIndex - 1;
            return (this.photoList[this.currentPhotoIndex]);
        } else if (this.currentPhotoIndex > this.photoList.length - 1){
            return ("End of slideshow")
        } else if(this.currentPhotoIndex <= 0) {
            return ("Beginning of slideshow")
        } else {
            return ("Something went wrong. Please try again.")
        }
  
    },
    getCurrentPhoto : function() {
        return (this.photoList[this.currentPhotoIndex])
    }
  
  }
console.log(photoSlideShow.getCurrentPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());




