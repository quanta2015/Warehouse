import search   from '@/img/menu/search.svg'
import ware     from '@/img/menu/ware.svg'
import rcamera  from '@/img/menu/rcamera.svg'
import person   from '@/img/menu/person.svg'
import config   from '@/img/menu/config.svg'

export const MENU_LIST = [
    {
        "key": "製品検索",
        "path": "/",
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
    // {
    //     "key": "系统设置",
    //     "path": "/config",
    //     "icon": config,
    //     "submenu": []
    // },
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
    Configuration: "Configuration",
    "Gasket Color": "Gasket Color",
    "Gasket Material": "Gasket Material",
    "Gasket Sealant Included": "Gasket Sealant Included",
    "Grade Type": "Grade Type",
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

export const json_w1 = {
  table:'whs',
  define: [{
    dataIndex: 'whs_id',
    type: 'string',
    title: '仓库ID',
  },{
    dataIndex: 'whs_name',
    type: 'string',
    title: '仓库名称',
  },{
    dataIndex: 'whs_email',
    type: 'string',
    title: '电子邮箱',
  },{
    dataIndex: 'whs_tel',
    type: 'string',
    title: '联系方式',
  },{
    dataIndex: 'whs_detail',
    type: 'json',
    title: '详情',
  },{
    dataIndex: 'whs_addr',
    type: 'string',
    title: '仓库地址',
  }],
  sub: {
    table: 'whs_inv',
    ref: 'whs_id',
    define: [{
      dataIndex: 'inv_id',
      type: 'string',
      title: '在庫ID',
    },{
      dataIndex: 'whs_id',
      type: 'string',
      title: '仓库id',
    },{
      dataIndex: 'loc_id',
      type: 'string',
      title: '货架id',
    },{
      dataIndex: 'loc_name',
      type: 'string',
      title: '货架名称',
    },{
      dataIndex: 'part_id',
      type: 'string',
      title: '零件id',
    },{
      dataIndex: 'stock_num',
      type: 'double',
      title: '库存数',
    },{
      dataIndex: 'min_stock_num',
      type: 'double',
      title: '最小库存',
    },{
      dataIndex: 'max_stock_num',
      type: 'double',
      title: '最大库存',
    }]
  }
}

export const json_w2 = {
  table:'part_in',
  define: [{
    dataIndex: 'in_mng_id',
    type: 'string',
    title: '仓库ID',
    key: true,
  },{
    dataIndex: 'whs_mng_id',
    type: 'string',
    title: '仓库名称',
  },{
    dataIndex: 'loc_id',
    type: 'string',
    title: '电子邮箱',
  },{
    dataIndex: 'purcon_id',
    type: 'string',
    title: '联系方式',
  },{
    dataIndex: 'part_id',
    type: 'json',
    title: '详情',
  },{
    dataIndex: 'in_num',
    type: 'double',
    title: '在库数量',
  },{
    dataIndex: 'hoso_serial',
    type: 'string',
    title: 'hoso编码',
  },{
    dataIndex: 'last_inb_user_id',
    type: 'auto_user',
    title: '最终管理用户',
  },{
    dataIndex: 'last_inb_datetime',
    type: 'auto_date',
    title: '最终管理时间',
  }],
  sub: {
    table: 'part_in_his',
    ref: 'in_mng_id',
    define: [{
      dataIndex: 'in_dtl_id',
      type: 'string',
      title: '在庫ID',
    },{
      dataIndex: 'in_mng_id',
      type: 'string',
      title: '仓库id',
    },{
      dataIndex: 'part_id',
      type: 'string',
      title: '货架id',
    },{
      dataIndex: 'inb_rep_id',
      type: 'string',
      title: '货架名称',
    },{
      dataIndex: 'last_in_datetime',
      type: 'auto_date',
      title: '零件id',
    }]
  }
}