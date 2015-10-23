#files=zh-tw/*.md
#cmd=opencc -c zht2zhs.ini -i

#hans:
#	@mkdir -p zh-cn
#	@for name in ${files} ; do \
#		${cmd} $$name -o $${name//tw/cn} ; \
#	done

#init:
#	@cp README.md zh-tw/
#	@$(MAKE) hans


github:
	@ghp-import book -b master -p
