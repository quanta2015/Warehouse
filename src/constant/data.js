import search   from '@/img/menu/search.svg'
import ware     from '@/img/menu/ware.svg'
import rcamera  from '@/img/menu/rcamera.svg'
import person   from '@/img/menu/person.svg'
import config   from '@/img/menu/config.svg'

export const MENU_LIST = [
    {
        "key": "製品検索機能",
        "path": "/search",
        "icon": search,
        "submenu": []
    },
    {
        "key": "在庫管理",
        "path": "/ware",
        "icon": ware,
        "submenu": []
    },
    {
        "key": "設備監視",
        "path": "/monitor",
        "icon": rcamera,
        "submenu": []
    },
    {
        "key": "人员管理",
        "path": "/person",
        "icon": person,
        "submenu": []
    },
    {
        "key": "系统设置",
        "path": "/config",
        "icon": config,
        "submenu": []
    },
]

export const getNameByKey =(key)=> ATTR_LIST[key]

export const ATTR_LIST = {
    wt: "重量",
    wt_uom:"重量単位",
    catalog:"カタログ",
    img_def:"デフォルトの画像",
    img_org:"オリジナルの画像",
    img_tiny:"サムネイル",
    min_qty:"最小数量",
    pkg_qty:"パッケージの数量",
    pkg_type:"パッケージの種類",
    rtb_code:"リアルタイムビッドコード",
    part_type:"部品タイプ",
    sales_desc:"販売説明",
    part_desc_l:"製品説明",
    Brand: "ブランド",
    Weight:"重量",
    Color: "色",
    "Thickness (IN)":"厚さ（IN）",
    "Invoice": "請求書",
    "Material": "材料",
    "Package Qty": "パッケージ数量",
    "Package Type": "パッケージタイプ",
    "Bolt Hole Quantity": "ボルト穴の数量",
    "Intake Port Quantity": "吸気ポートの数量",
    "California Proposition 65": "カリフォルニア州の命令65",
    "New external Material Group":"新しい外部素材グループ",
    "Prop 65":"Prop 65",
    
  }
