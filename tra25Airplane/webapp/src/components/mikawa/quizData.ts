// Quiz data for Mikawa Program
import type { QuizData } from './types';

// The quiz data with 10 quizzes
const quizData: QuizData[] = [
  {
    "id": 1,
    "challenge": "成田シェフが科コンのみんなにふるまった食べ物は？",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "餃子" },
      { "type": "text", "content": "ローストビーフ" },
      { "type": "text", "content": "唐揚げ" },
      { "type": "text", "content": "角煮" },
      { "type": "text", "content": "チャーハン" },
      { "type": "text", "content": "ハンバーガー" },
      { "type": "text", "content": "生姜焼き" },
      { "type": "text", "content": "プリン" },
      { "type": "text", "content": "団子" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["1", "2", "5", "8"]
  },
  {
    "id": 2,
    "challenge": "堀江語録を選択するぜよ！",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "ケロッグコーンフリクト" },
      { "type": "text", "content": "マージンガーZ" },
      { "type": "text", "content": "こつら" },
      { "type": "text", "content": "東芝" },
      { "type": "text", "content": "マイペンライ" },
      { "type": "text", "content": "ミー" },
      { "type": "text", "content": "プルプル" },
      { "type": "text", "content": "牧場" },
      { "type": "text", "content": "Oh! 157" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  },
  {
    "id": 3,
    "challenge": "ぬいぐるみ（フィギュア含む）を机の上に置いているTPサポートメンバは？",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "淺利さん" },
      { "type": "text", "content": "三川" },
      { "type": "text", "content": "七谷さん" },
      { "type": "text", "content": "竹中さん" },
      { "type": "text", "content": "小牧さん" },
      { "type": "text", "content": "宇田川さん" },
      { "type": "text", "content": "清水ありささん" },
      { "type": "text", "content": "遠藤聡さん" },
      { "type": "text", "content": "すずきりょうとさん" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["4", "6"]
  },
  {
    "id": 4,
    "challenge": "タレント自動連携で、技術支援で支援の実績が多い基幹システム上位3つは？",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "COMPANY" },
      { "type": "text", "content": "generalist" },
      { "type": "text", "content": "Obic" },
      { "type": "text", "content": "SMILE" },
      { "type": "text", "content": "POSITIVE" },
      { "type": "text", "content": "奉行" },
      { "type": "text", "content": "ZeeM" },
      { "type": "text", "content": "HITKOT" },
      { "type": "text", "content": "SAP" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "2", "4"]
  },
  // {
  //   "id": 5,
  //   "challenge": "将大さんが鳥貴族で店長をしていたお店の名前は？",
  //   "type": "text",
  //   "gridItems": [
  //     { "type": "text", "content": "三条河原町通店" },
  //     { "type": "text", "content": "北新地店" },
  //     { "type": "text", "content": "九条店" },
  //     { "type": "text", "content": "新大阪店" },
  //     { "type": "text", "content": "梅田DDハウス店" },
  //     { "type": "text", "content": "岸和田店" },
  //     { "type": "text", "content": "四条畷店" },
  //     { "type": "text", "content": "中百舌鳥店" },
  //     { "type": "text", "content": "江坂駅東店" }
  //   ],
  //   "answerType": "multiple",
  //   "correctAnswers": [] // 正解が空欄のためコメントアウト
  // },
  {
    "id": 6,
    "challenge": "CRの月額Top3は？",
      "type": "image",
      "gridItems": [
          { "type": "image", "content": "/mikawa/quiz/06/01.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/02.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/03.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/04.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/05.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/06.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/07.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/08.jpg" },
          { "type": "image", "content": "/mikawa/quiz/06/09.jpg" }
      ],
    "answerType": "multiple",
    "correctAnswers": ["0", "1", "2"]
  },
  {
    "id": 7,
    "challenge": "MSのzoomブレイクアウトルームに現在あるものを全て選べ",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "桜" },
      { "type": "text", "content": "山茶花" },
      { "type": "text", "content": "鈴蘭" },
      { "type": "text", "content": "秋桜" },
      { "type": "text", "content": "桔梗" },
      { "type": "text", "content": "向日葵" },
      { "type": "text", "content": "紫陽花" },
      { "type": "text", "content": "朝顔" },
      { "type": "text", "content": "水仙" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "1", "2", "6", "8"]
  },
  {
    "id": 8,
    "challenge": "PACゴルフコンペ（通称 ミム鈴杯）で、皆勤賞のメンバをすべて選べ。",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "鈴村 賢治" },
      { "type": "text", "content": "竹内 孝" },
      { "type": "text", "content": "野口 祥吾" },
      { "type": "text", "content": "松原 雅仁" },
      { "type": "text", "content": "山崎 雄司" },
      { "type": "text", "content": "山崎 有梧" },
      { "type": "text", "content": "角田 健太郎" },
      { "type": "text", "content": "甫坂翔" },
      { "type": "text", "content": "小林だいき" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["1", "2", "6", "8"]
  },
  {
    "id": 9,
    "challenge": "新卒３年目のメンバーの中で、漢字の「山」が入る人は次の選択肢のどこに該当する？",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "TP事業部　営業" },
      { "type": "text", "content": "TP事業部　コンサル" },
      { "type": "text", "content": "TP事業部　開発" },
      { "type": "text", "content": "MS事業部　営業" },
      { "type": "text", "content": "MS事業部　コンサル" },
      { "type": "text", "content": "MS事業部　開発" },
      { "type": "text", "content": "YS事業部　営業" },
      { "type": "text", "content": "YS事業部　コンサル" },
      { "type": "text", "content": "YS事業部　開発" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "1", "2"]
  },
  {
    "id": 10,
    "challenge": "皆さん日頃より利用している「情技問合せ」のslackチャンネルに存在するワークフローはどれ？",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "情技問合せ" },
      { "type": "text", "content": "GuardianWall変更申請" },
      { "type": "text", "content": "iFilterブロック解除申請" },
      { "type": "text", "content": "クラウドサイン連携依頼" },
      { "type": "text", "content": "セキュリティチェックシート対応依頼" },
      { "type": "text", "content": "サーバー作業承認依頼" },
      { "type": "text", "content": "ビデオカメラ貸出申請" },
      { "type": "text", "content": "大容量ファイル送信申請" },
      { "type": "text", "content": "ファイルアップロード確認" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "2", "3", "7"]
  },
  {
    "id": 11,
    "challenge": "17期入社メンバ",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "坂口" },
      { "type": "text", "content": "鍵村" },
      { "type": "text", "content": "安田" },
      { "type": "text", "content": "中本" },
      { "type": "text", "content": "竹内徹" },
      { "type": "text", "content": "中村まい" },
      { "type": "text", "content": "須山" },
      { "type": "text", "content": "外川" },
      { "type": "text", "content": "内田" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["1", "3", "4", "6"]
  },
  {
    "id": 12,
    "challenge": "サッカー経験者をすべて選べ",
    "type": "text",
    "gridItems": [
      { "type": "text", "content": "角田" },
      { "type": "text", "content": "守田" },
      { "type": "text", "content": "寧々" },
      { "type": "text", "content": "高野" },
      { "type": "text", "content": "石川" },
      { "type": "text", "content": "樋口" },
      { "type": "text", "content": "稲田" },
      { "type": "text", "content": "奥村" },
      { "type": "text", "content": "谷口" }
    ],
    "answerType": "multiple",
    "correctAnswers": ["0", "1", "2", "3", "4"]
  }
];

export default quizData;