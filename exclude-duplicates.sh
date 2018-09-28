#!/bin/sh

new="${1}"
out="${new}.out"
fallback="${2}"
default="${3}"

if [ -z "${new}" -o -z "${fallback}" -o -z "${default}" ]; then
	echo "Usage:"
	echo "	$(basename $0) new_file fallback_file default_file"
	echo "Example:"
	echo "	$(basename $0) MX.js ES.js default.js"
	exit 1
fi

echo "===> Checking ${new}..."
cat  ${new} | gawk "BEGIN {
	fb = \"${fallback}\"
	def = \"${default}\"
	out = \"${out}\"
}"'{
	if ($0 ~ "\"TODO: ") {
		# Skip all TODOs
		#print "T ", $0
	} else if ($0 ~ "[.]en\":") {
		# Check if english line match the default file
		key = $1
		val = $0
		# Remove key
		gsub(key, "", val)
		# Remove leading spaces
		gsub(/^\s+/, "", val)
		# Remove .en suffix
		gsub("[.]en\"", "\"", key)
		# Ignore case and remove quotes
		key = tolower(substr(key, 2, length(key) - 3))
		val = tolower(substr(val, 2, length(val) - 3))
		dup = 0
		while (getline l < def) {
			l = tolower(l)
			if (index(l, key) && index(l, val)) {
				dup = 1
				break
			}
		}
		close(def)
		# if (!dup) {
		# TODO: skip all english lines
		if (false) {
			#printf "EN key=[%s] val=[%s] l=[%s]\n", key, val, l
			print $0 > out
		}
	} else if ($0 ~ /[ \t]*\"/) {
		# Check if line match the fallback file
		key = $1
		val = $0
		# Remove key
		gsub(key, "", val)
		# Remove leading spaces
		gsub(/^\s+/, "", val)
		# Remove .en suffix
		gsub("[.]en\"", "\"", key)
		# Ignore case and remove quotes
		key = tolower(substr(key, 2, length(key) - 3))
		val = tolower(substr(val, 2, length(val) - 3))
		dup = 0
		while (getline l < fb) {
			l = tolower(l)
			if (index(l, key) && index(l, val)) {
				dup = 1
				break
			}
		}
		close(fb)
		if (!dup) {
			while (getline l < def) {
				l = tolower(l)
				if (index(l, key) && index(l, val)) {
					dup = 1
					break
				}
			}
			close(def)
		}
		if (!dup) {
			#printf "FB key=[%s] val=[%s] l=[%s]\n", key, val, l
			print $0 > out
		}
	} else {
		# Else just pass the line
		print $0 > out
	}
}'
