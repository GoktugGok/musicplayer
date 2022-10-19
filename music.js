class Music{
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title;
    }
}

const musicList=[
    new Music("İlerle","göktuğ","1.jpeg","1.mp3"),
    new Music("Eskimiş","göktuğ","2.jpeg","2.mp3"),
    new Music("boş","göktuğ","3.jpeg","3.mp3")
]