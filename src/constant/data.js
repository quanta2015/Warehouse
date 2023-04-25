import bridge       from '@/img/menu/bridge.svg'
import excavator    from '@/img/menu/excavator.svg'
import collaborate  from '@/img/menu/collaborate.svg'
import business     from '@/img/menu/business.svg'
import chart        from '@/img/menu/chart.svg'
import person       from '@/img/menu/person.svg'



export const MENU_LIST = [
    {
        "key": "工程一覽",
        "path": "/project",
        "icon": bridge,
        "submenu": [
            {
                "key": "作業中工程",
                "path": "/project",
            },
            {
                "key": "作業完了工程",
                "path": "/project",
            },
        ]
    },
    {
        "key": "建機一覽",
        "path": "/architect",
        "icon": excavator,
        "submenu": [
            {
                "key": "機動中建機",
                "path": "/project",
            },
            {
                "key": "待機建機",
                "path": "/project",
            },
            {
                "key": "メンテナンス中建機",
                "path": "/project",
            },
            {
                "key": "廢業建機",
                "path": "/project",
            },
        ]
    },
    {
        "key": "商業バーロナー",
        "path": "/business",
        "icon": collaborate,
        "submenu": [
            {
                "key": "建築會社",
                "path": "/project",
            },
            {
                "key": "レンタル會社",
                "path": "/project",
            },
            {
                "key": "メンテナンス會社",
                "path": "/project",
            },
            {
                "key": "物流會社",
                "path": "/project",
            },
            {
                "key": "物品サポライイヤー",
                "path": "/project",
            },
        ]
    },
    {
        "key": "業務",
        "path": "/news",
        "icon": business,
        "submenu": [
            {
                "key": "アラート處理",
                "path": "/project",
            },
            {
                "key": "設備作業計劃實際",
                "path": "/project",
            },
            {
                "key": "建機在庫管理",
                "path": "/project",
            },
            {
                "key": "運送管理",
                "path": "/project",
            },
            {
                "key": "メンテナンス",
                "path": "/project",
            },
            {
                "key": "預備部品",
                "path": "/project",
            },
            {
                "key": "建機監視",
                "path": "/project",
            },
            {
                "key": "操作員監視",
                "path": "/project",
            },
        ]
    },
    {
        "key": "契約",
        "path": "/shop",
        "icon": chart,
        "submenu": [
            {
                "key": "見機",
                "path": "/project",
            },
            {
                "key": "契約",
                "path": "/project",
            },
            {
                "key": "請求書",
                "path": "/project",
            },
            {
                "key": "支払う",
                "path": "/project",
            },
        ]
    },
    {
        "key": "人事",
        "path": "/contact",
        "icon": person,
        "submenu": [
            {
                "key": "人員管理",
                "path": "/project",
            },
        ]
    }
]


