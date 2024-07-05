// SPDX-License-Identifier: GPL-3.0-or-later

package modules

import (
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/activemq"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/adaptecraid"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/apache"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/bind"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/cassandra"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/chrony"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/clickhouse"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/cockroachdb"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/consul"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/coredns"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/couchbase"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/couchdb"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dmcache"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dnsdist"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dnsmasq"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dnsmasq_dhcp"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dnsquery"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/docker"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/docker_engine"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/dockerhub"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/elasticsearch"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/envoy"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/example"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/fail2ban"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/filecheck"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/fluentd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/freeradius"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/geth"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/haproxy"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/hddtemp"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/hdfs"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/hpssa"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/httpcheck"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/intelgpu"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/ipfs"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/isc_dhcpd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/k8s_kubelet"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/k8s_kubeproxy"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/k8s_state"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/lighttpd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/litespeed"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/logind"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/logstash"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/lvm"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/megacli"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/mongodb"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/mysql"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/nginx"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/nginxplus"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/nginxvts"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/ntpd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/nvidia_smi"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/nvme"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/openvpn"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/openvpn_status_log"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/pgbouncer"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/phpdaemon"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/phpfpm"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/pihole"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/pika"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/ping"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/portcheck"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/postfix"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/postgres"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/powerdns"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/powerdns_recursor"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/prometheus"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/proxysql"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/pulsar"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/rabbitmq"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/redis"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/rspamd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/scaleio"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/sensors"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/smartctl"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/snmp"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/squidlog"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/storcli"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/supervisord"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/systemdunits"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/tengine"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/traefik"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/unbound"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/upsd"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/vcsa"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/vernemq"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/vsphere"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/weblog"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/whoisquery"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/windows"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/wireguard"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/x509check"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/zfspool"
	_ "github.com/netdata/netdata/go/plugins/plugin/go.d/modules/zookeeper"
)
