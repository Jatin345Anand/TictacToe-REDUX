import React from 'react';
const BUTTONOPEARTION = {
    BUTTONARRAY: [],
    V1: "",
    V2: "",
    V3: "",
    V4: "",
    V5: "",
    V6: "",
    V7: "",
    V8: "",
    V9: "",
    GameOver: false,
    TellGO:function(){
        return this.GameOver;
    },
    isGameFinish: function () {
         
        if (this.isRow(this.V1, this.V2, this.V3)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V4, this.V5, this.V6)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V7, this.V8, this.V9)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V1, this.V4, this.V7)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V2, this.V5, this.V8)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V3, this.V6, this.V9)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V1, this.V5, this.V9)) {
            this.GameOver = true;
            this.TellGO();
        }
        if (this.isRow(this.V3, this.V5, this.V7)) {
            this.GameOver = true;
            this.TellGO();
        }

    },
    isRow: function (A, B, C) {
        // console.log(A);
        // console.log(B);
        // console.log(C);
        // console.log(this.isNotBlank(B));
        // console.log(this.isNotBlank(C));

        if (this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)) {
            // console.log(A, B, C);
            // console.log(this.isSameValue(A, B, C));
            if (this.isSameValue(A, B, C)) {

                return true;
            }

            return false;
        }
    },
    isNotBlank: function (button) {

        if (button == "") {
            return false;
        } else {
            return true;
        }
    },

    isSameValue: function (one, two, three) {
        if ((one == two && one == three)) {
            return true;
        } else {
            return false;
        }
    }

}
export default BUTTONOPEARTION;