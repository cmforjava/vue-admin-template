import request from '@/utils/request'
import qs from 'qs'
export function getList(params) {
  return fetch('https://kuaidi.askyiwu.cn/api/v1/orders?' + qs.stringify(params), {
    'headers': {
      'accept': 'application/json, text/plain, */*',
      'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5ODNjZWQ4MDRiYjMzNWNiODZmNjFmMTkyNzBmMjk3ZDEwYjBiMDMwNzBlOTBmM2FkMTEwNGIwZTI2MzgyYWJmZjIzZTcyNDNiMDVjN2JjIn0.eyJhdWQiOiIyIiwianRpIjoiMTk4M2NlZDgwNGJiMzM1Y2I4NmY2MWYxOTI3MGYyOTdkMTBiMGIwMzA3MGU5MGYzYWQxMTA0YjBlMjYzODJhYmZmMjNlNzI0M2IwNWM3YmMiLCJpYXQiOjE1NjU1MDQ0NDAsIm5iZiI6MTU2NTUwNDQ0MCwiZXhwIjoxNTk3MTI2ODQwLCJzdWIiOiIxMTgwIiwic2NvcGVzIjpbXX0.NnKbQ4VhMl-x6H1hvEhuCefV-UjLqOA_1V2zdlkTmaPu60YC_AcUeSvGRpQGdQrMUiE-AsBKo_GyJgHZAdWW34E_buW-vYDwLgqo64yN-8dJRCWeUbqSEuvOyyAWhAn-VkouUsqjZXYTl9xHsMk5vxsK2xMaatgi4_iO-_TcFxsPS3zUwrB5wRfqRgmLdW7yuoBcFTRmsDa5UM9eZI3gfU4cKwprcOvqZWASBC0R89-hbf-D2Qd6N-HoFbRbblKe0ADuzn8Jw_gz68HPE6iQhU1SB7f6acSpEYXD65QkWvs2d_rxxjGgdw8zKWNXcS-uFIx19oeJUuzXzxyIDdtQIx8u42-o1zF3aX56FLKmlMirR8lntLF2UV70M04FNkjDJWeY8g3b3gisQHTp1n5q33_5Rr7URJ7wlAYfaTq0Xyw21tYa_KNELyJnkO-d-GuhK8fP54ueRUnXAlpfOceCTqrCFmnBICfoCIwLmFneWwwutCPPCl1m7-ccn62QGptiAG5nQO4fdr0tAVBauRGzg2Y-IwdLZnQicvNI3Ic825RDAQGbErWfSpsJvK021YuzfgBUnuBlPMB3g8FJwpO6sM4ow3J-Lc5QjTJxk7-VRoqBJ51Yyfk_-K1erclxYF8QXwRyiOvjPZ1CyHP3V5fT_3FZGZR3IVLqqutpACOnxy0'
    },
    'referrer': 'http://kuaidi.askyiwu.cn/kuaidi/',
    'referrerPolicy': 'no-referrer-when-downgrade',
    'body': null,
    'method': 'GET',
    'mode': 'cors'
  }).then(res => { return res.json() })
}
export function getOne(id) {
  return fetch('https://kuaidi.askyiwu.cn/api/v1/orders/' + id, {
    'headers': {
      'accept': 'application/json, text/plain, */*',
      'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5ODNjZWQ4MDRiYjMzNWNiODZmNjFmMTkyNzBmMjk3ZDEwYjBiMDMwNzBlOTBmM2FkMTEwNGIwZTI2MzgyYWJmZjIzZTcyNDNiMDVjN2JjIn0.eyJhdWQiOiIyIiwianRpIjoiMTk4M2NlZDgwNGJiMzM1Y2I4NmY2MWYxOTI3MGYyOTdkMTBiMGIwMzA3MGU5MGYzYWQxMTA0YjBlMjYzODJhYmZmMjNlNzI0M2IwNWM3YmMiLCJpYXQiOjE1NjU1MDQ0NDAsIm5iZiI6MTU2NTUwNDQ0MCwiZXhwIjoxNTk3MTI2ODQwLCJzdWIiOiIxMTgwIiwic2NvcGVzIjpbXX0.NnKbQ4VhMl-x6H1hvEhuCefV-UjLqOA_1V2zdlkTmaPu60YC_AcUeSvGRpQGdQrMUiE-AsBKo_GyJgHZAdWW34E_buW-vYDwLgqo64yN-8dJRCWeUbqSEuvOyyAWhAn-VkouUsqjZXYTl9xHsMk5vxsK2xMaatgi4_iO-_TcFxsPS3zUwrB5wRfqRgmLdW7yuoBcFTRmsDa5UM9eZI3gfU4cKwprcOvqZWASBC0R89-hbf-D2Qd6N-HoFbRbblKe0ADuzn8Jw_gz68HPE6iQhU1SB7f6acSpEYXD65QkWvs2d_rxxjGgdw8zKWNXcS-uFIx19oeJUuzXzxyIDdtQIx8u42-o1zF3aX56FLKmlMirR8lntLF2UV70M04FNkjDJWeY8g3b3gisQHTp1n5q33_5Rr7URJ7wlAYfaTq0Xyw21tYa_KNELyJnkO-d-GuhK8fP54ueRUnXAlpfOceCTqrCFmnBICfoCIwLmFneWwwutCPPCl1m7-ccn62QGptiAG5nQO4fdr0tAVBauRGzg2Y-IwdLZnQicvNI3Ic825RDAQGbErWfSpsJvK021YuzfgBUnuBlPMB3g8FJwpO6sM4ow3J-Lc5QjTJxk7-VRoqBJ51Yyfk_-K1erclxYF8QXwRyiOvjPZ1CyHP3V5fT_3FZGZR3IVLqqutpACOnxy0'
    },
    'referrer': 'http://kuaidi.askyiwu.cn/kuaidi/',
    'referrerPolicy': 'no-referrer-when-downgrade',
    'body': null,
    'method': 'GET',
    'mode': 'cors'
  }).then(res => { return res.json() })
}
