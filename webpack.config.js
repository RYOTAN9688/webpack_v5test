module.exports = {
    //読み込むファイル
    entry:"./src/index.tsx",
    //出力するファイル
    output:{
        //出力ファイルのディレクトリ名
        path:`${__dirname}/dist`,
        filename:"main.js"
    },
    //開発用
    mode:"development",
    //本番用
    // mode:"production"
    module:{
        rules:[
            {
                // 拡張子 .ts もしくは .tsx の場合
                test:/\.tsx?$/,
                use:[
                //   {
                //       //Babelを使用する
                //       loader:"babel-loader",
                //       //Babelのオプション設定
                //       options:{
                //           presets:[
                //               //プリセットを指定することでES2021をES5に変換する
                //               "@babel/preset-env",
                //               //Reactのjsxを解釈する
                //               "@babel/react"
                //           ]
                //       }
                //   }
                //Typescriptをコンパイルする
                "ts-loader"
                ],
                //node_modulesはビルドしないようにする
                exclude: /node_modules/,
            }
        ],
    },
     //モジュール（imort文など）として.tsや.tsxファイルを解決させる
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    target:["web","es5"],
      //ローカル環境が立ち上がる
    //実行するとブラウザが自動的にlocalhostを立ち上げる
    devServer:{
    static: 'dist',
    open: true   
    },
}

