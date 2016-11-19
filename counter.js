var JackpotsObject = {
            jackpots: {123:{jackpot:17843,obj:null,update:true},543:{jackpot:3465,obj:null,update:true},745:{jackpot:1934646,obj:null,update:true},777:{jackpot:10009,obj:null,update:true}},
            jackpotsElements: null,
            updateJackpot: true,
            initJackpots: function(){
                this.jackpotsElements = document.querySelectorAll('.jackpot');
                this.currentId = null,
                this.currentElement = null;
                loop1:
                for(var i=0;i<this.jackpotsElements.length;i++){
                    for(var j=0;j<this.jackpotsElements[i].classList.length;j++){
                        if(this.jackpotsElements[i].classList[j].indexOf('id-') !== -1){
                            var itemId = this.jackpotsElements[i].classList[j].split('-')[1];
                            this.jackpots[itemId].obj = this.jackpotsElements[i];
                            this.startJackpot(itemId);
                            continue loop1;
                        }else{
                            continue;
                        }
                    }
                }  
            },
            startJackpot: function(itemId){
                var currentJackpot = this.jackpots[itemId].jackpot;
                this.jackpots[itemId].obj.innerHTML = '$'+currentJackpot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                setInterval(function(){
                    if(JackpotsObject.jackpots[itemId].update){
                        JackpotsObject.jackpots[itemId].update = false;
                        currentJackpot = currentJackpot + Math.floor((Math.random() * 350) + 50);
                        JackpotsObject.showNumber(itemId,currentJackpot,Math.floor((Math.random() * 1500) + 500),JackpotsObject.jackpots[itemId].obj);
                    }
                },500);
            },
            showNumber: function(itemId,num,delayNum,item){
                var currentJackpot = num;
                setTimeout(function(){
                JackpotsObject.jackpots[itemId].update = true;
                item.innerHTML = '$'+num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                },delayNum);
            }
        };
        window.onload = function(){
            JackpotsObject.initJackpots();
        }