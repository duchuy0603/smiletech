
export default {
    items: [
        {
            id: 'navigation',
            title: 'System slile tech',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Trang chủ',
                    type: 'item',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'category',
            title: 'Quản lý danh mục',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'ecommerce',
                    title: 'Hệ Thống Sàn',
                    type: 'item',
                    url: '/ecommerce',
                    icon: 'feather icon-calendar'
                },
                {
                    id: 'category-dance',
                    title: 'Loại điệu nhảy',
                    type: 'item',
                    icon: 'feather icon-book',
                    url: '/category/category-dance'
                },
                {
                    id: 'dance',
                    title: 'Điệu nhảy',
                    type: 'item',
                    icon: 'feather icon-music',
                    url: '/category/dance'
                },
                {
                    id: 'competition-class',
                    title: 'Hạng thi đấu',
                    type: 'item',
                    icon: 'feather icon-award',
                    url: '/category/competition-class'
                },
                {
                    id: 'fees',
                    title: 'Lệ phí',
                    type: 'item',
                    icon: 'feather icon-edit',
                    url: '/category/fees'
                },
                {
                    id: 'category-content',
                    title: 'Nội dung',
                    type: 'item',
                    icon: 'feather icon-file-text',
                    url: '/category/category-content'
                }
            ]
        },
        {
            id: 'competition',
            title: 'Quản lý giải đấu',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'tournaments',
                    title: 'Giải đấu',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'tournaments-list',
                            title: 'Danh sách giải đấu',
                            type: 'item',
                            url: '/competition/tournaments-list',
                            icon: 'feather icon-command'
                        },
                        {
                            id: 'competition-content',
                            title: 'Nội dung thi đấu',
                            type: 'item',
                            icon: 'feather icon-file-minus',
                            url: '/competition/competition-content'
                        },
                    ]
                },
                {
                    id: 'athletes-event',
                    title: 'DS VĐV sự kiện',
                    type: 'item',
                    icon: 'feather icon-user-check',
                    url: '/competition/athletes-event'
                },
                {
                    id: 'competition-program',
                    title: 'Chương trình thi đấu',
                    type: 'item',
                    icon: 'feather icon-airplay',
                    url: '/competition/competition-program'
                }
            ]
        },
        {
            id: 'athletes',
            title: 'Quản lý danh sách VĐV',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'athletes-list',
                    title: 'Danh sách VĐV',
                    type: 'item',
                    url: '/athletes/athletes-list',
                    icon: 'feather icon-users'
                }
            ]
        },
        {
            id: 'accounts',
            title: 'Quản lý tài khoản',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'accounts-list',
                    title: 'Danh sách tài khoản',
                    type: 'item',
                    url: '/accounts/accounts-list',
                    icon: 'feather icon-user-plus'
                }
            ]
        },
        {
            id: 'news',
            title: 'Quản lý tin tức',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'new-themes',
                    title: 'Chủ đề',
                    type: 'item',
                    url: '/news/new-themes',
                    icon: 'feather icon-aperture'
                },
                {
                    id: 'new-list',
                    title: 'Danh sách tin',
                    type: 'item',
                    url: '/news/new-list',
                    icon: 'feather icon-layout'
                }
            ]
        },
        {
            id: 'setting',
            title: 'Cài đặt',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'introduce',
                    title: 'Giới thiệu',
                    type: 'item',
                    icon: 'feather icon-credit-card',
                    url: '/setting/introduce'
                },
                {
                    id: 'info-contact',
                    title: 'Thông tin liên hệ',
                    type: 'item',
                    icon: 'feather icon-phone-call',
                    url: '/setting/info-contact'
                },
                {
                    id: 'list-contact',
                    title: 'Danh sách liên hệ',
                    type: 'item',
                    icon: 'feather icon-list',
                    url: '/setting/list-contact'
                },
                {
                    id: 'slide',
                    title: 'Slide',
                    type: 'item',
                    icon: 'feather icon-feather',
                    url: '/setting/slide'
                },
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Charts',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Đăng ký',
                            type: 'item',
                            url: '/auth/signup',
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Đăng nhập',
                            type: 'item',
                            url: '/auth/signin',
                            breadcrumbs: false
                        }
                    ]
                },
            ]
        }
    ]
}